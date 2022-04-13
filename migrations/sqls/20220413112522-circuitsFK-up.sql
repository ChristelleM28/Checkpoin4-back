/* Replace with your SQL commands */
ALTER TABLE calendar ADD CONSTRAINT fk_calendar_circuit_id FOREIGN KEY (circuit_id) REFERENCES circuits(id);
