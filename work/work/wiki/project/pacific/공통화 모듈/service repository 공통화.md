# Service / Repository 공통화

우선 공통화에 앞서 인지하고 가셔야할 부분이 있습니다.
Entity 와 Model은 동일한 객체가 아닙니다.

**Entity - Table과 1 대 1로 매핑되는 객체입니다.**
절대 Entity를 직접적으로 사용하는 일은 없어야합니다.

Model - Entity 도 1대 1 관계입니다. 다만 로직적으로 필요한 부분이나 추가적인 데이터에 관련된 사항들을
Model 객체에 추가하여 사용합니다.

---

- Repository
JpaRepository 와 JpaSpecificationExecutor를 상속 받았습니다.
```
@NoRepositoryBean
public interface CommonJpaRepository<T, ID extends Serializable> extends JpaRepository<T, ID>, JpaSpecificationExecutor<T> {
}
```

- Service
Service는 공통적으로 가장 많이 사용하는 메소드들을 기준으로 작성 되었습니다.
<T> model
<E> entity
<ID> Entity Key Class(ex.String / Integer / Long / etc...)
```
public interface CommonService<T, E, ID extends Serializable> {

    public T save(T t) throws UnauthorizedException, ProcessingException;

    public T findById(T t, ID id) throws UnauthorizedException, ProcessingException;

    public List<T> findAll(T t) throws UnauthorizedException;

    public Page<E> pages(Integer pageIndex, Integer pagePerNumber) throws UnauthorizedException;

    public void delete(T t) throws ProcessingException;

    public void delete(ID id) throws ProcessingException;
    
    public void delete(Iterable<T> t) throws ProcessingException;
}
```

이외의 기능이 필요하실 경우에는 해당 CommonService를 상속 받아, 추가작성하시면 됩니다.


이 CommonService를 추상화한 객체가 있습니다.

이 추상화 객체는 아주 단순한 기능만을 제공합니다.
CRUDL 과 단순 Sort / 검색을 제공합니다.

```
public abstract class AbstractCommonServiceImpl<T extends ModelToEntityTransform<T, E>, E, ID extends Serializable> implements
        CommonService<T, E, ID> {

    private CommonJpaRepository<E, ID> repository;

    protected CommonJpaRepository<E, ID> getRepository() {
        return this.repository;
    }

    protected void setRepository(CommonJpaRepository<E, ID> repository) {
        this.repository = repository;
    }

    @PostConstruct
    public abstract void setupRepository();

    @Override
    public T save(T t) throws UnauthorizedException, ProcessingException {
        return t.transformModel(getRepository().save(t.transformEntity()));
    }

    @Override
    public T findById(T t, ID id) throws UnauthorizedException, ProcessingException {
        return t.transformModel(getRepository().findOne(id));
    }

    @Override
    public List<T> findAll(T t) throws UnauthorizedException {
        List<E> lists = getRepository().findAll();
        List<T> result = new ArrayList<T>();
        if (lists != null) {
            for (E e : lists) {
                result.add(t.transformModel(e));
            }
        }
        return result;
    }

    @Override
    public void delete(ID id) throws ProcessingException {
        getRepository().delete(id);
    }

    @Override
    public void delete(T t) throws ProcessingException {
        getRepository().delete(t.transformEntity());
    }

    @Override
    public void delete(Iterable<T> ts) throws ProcessingException {
        List<E> lists = new ArrayList<E>();
        for (T t : ts) {
            lists.add(t.transformEntity());
        }
        getRepository().delete(lists);
    }

    /**
     * 페이징, 검색, 소트 지원
     * 
     * @param pageIndex
     * @param pagePerNumber
     * @param sort
     * @param spec
     * @return
     * @throws UnauthorizedException
     */
    @Override
    public Page<E> pages(Integer pageIndex, Integer pagePerNumber) throws UnauthorizedException {
        return pages(pageIndex, pagePerNumber, sortByCreatedDateDesc(), null);
    }

    protected Page<E> pages(Integer pageIndex, Integer pagePerNumber, Sort sort, Specification<E> spec) throws UnauthorizedException {
        Pageable pageSpecification = new PageRequest(pageIndex, pagePerNumber, sort);

        if (spec != null) {
            return getRepository().findAll(spec, pageSpecification);
        } else {
            return getRepository().findAll(pageSpecification);
        }
    }

    protected Sort sortByCreatedDateDesc() {
        return new Sort(Sort.Direction.DESC, "createdDate");
    }
}
```

적용한 예를 보자면 아래와 같습니다.
```
@Service
@Transactional
public class RegionServiceImpl extends AbstractOchestrationCommonServiceImpl<RegionModel, RegionEntity, String> implements RegionService {

    @Autowired
    RegionRepository regionRepository;

    @Override
    public void setupRepository() {
        setRepository(regionRepository);
    }

    @Override
    public List<RegionModel> callRegions(ConnectionModel tagConnection) {
        RegionFactory factory  = (RegionFactory)getConnection(tagConnection).getFactory(FactoryType.Region);
        List<Region> regions = factory.list();
        List<RegionModel> regionsResult = new ArrayList<RegionModel>();
        for(Region region : regions) {
            regionsResult.add(transformModel(region));
        }
        return regionsResult;
    }
    
    private RegionModel transformModel(Region region) {
        RegionModel model = new RegionModel();
        model.setRegionName(region.getName());
        model.setDescription(region.getDescription());
        model.setRegionId(region.getId());
        model.setEndPoint(region.getEndPointUrl());
        model.setProtocol(region.getProtocol());
        return model;
    }

}
```
