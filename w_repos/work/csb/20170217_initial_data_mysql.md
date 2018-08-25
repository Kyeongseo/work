Import CSV File Into MySQL Table
---

> [mysqltutorial](http://www.mysqltutorial.org/import-csv-file-mysql-table/)

```
LOAD DATA LOCAL INFILE 'd:/repos/dev/c-spider/cost_model.csv'
INTO TABLE t_cost_model
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS (id, cost_model_id, cost_model_name, cloud_service_id, 
unit_service_id, csp_measured_price, csp_flat_price, csb_measured_price, csb_flat_price);
```