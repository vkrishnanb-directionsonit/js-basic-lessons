-- Create a new table called 'Employee' in schema 'dbo'
-- Drop the table if it already exists
use sample;
go 
IF OBJECT_ID('dbo.Employee', 'U') IS NOT NULL
DROP TABLE dbo.Employee
GO
-- Create the table in the specified schema
CREATE TABLE dbo.Employee
(
    EmployeeId INT NOT NULL PRIMARY KEY, -- primary key column
    Name [NVARCHAR](50) NOT NULL,
    City [NVARCHAR](50) NOT NULL
    -- specify more columns here
);
GO