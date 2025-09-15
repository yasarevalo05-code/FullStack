-----------EJERCICIOS CLASE 1 YASMIN AREVALO -----------------
USE Northwind
GO
--1) Muestra los clientes ordenados alfabéticamente por el nombre de la compañía

SELECT * FROM Customers c
ORDER BY c.CompanyName ASC
GO
--2) Mostrar todos los clientes que su nombre empieza con “s”

SELECT * FROM Customers c
WHERE c.ContactName LIKE 'S%'
ORDER BY c.CompanyName
GO
--3) Encuentra todos los productos cuyo precio unitario sea mayor de 50.

SELECT * FROM Products p
WHERE p.UnitPrice > 50
GO
--4) Obtener cuantos productos “Discontinued” que hay. 

SELECT * FROM Products p
WHERE p.Discontinued = 1
GO
--5) Obtener el producto de mayor valor unitario

SELECT TOP 1 p.ProductName, p.UnitPrice FROM Products p
ORDER BY p.UnitPrice DESC
GO
--6) Obtener el producto de mayor valor unitario y el nombre del producto:(subquery)

SELECT p.ProductName, p.UnitPrice FROM Products p
WHERE p.UnitPrice IN (SELECT MAX(ptwo.unitprice) FROM Products ptwo )
GO
--7) Obtén una lista de todos los productos con su respectivo nombre de categoría.INNER JOIN

SELECT p.ProductName, c.CategoryName  FROM Products p
INNER JOIN Categories c ON p.CategoryID = c.CategoryID
GO

/*8) Obtener todos los clientes junto con los detalles de los pedidos que han
realizado. Si un cliente no ha realizado ningún pedido, aún debe aparecer en el
resultado con los detalles del pedido como NULL. LEFT JOIN*/

SELECT c.ContactName, o.OrderID, o.OrderDate FROM Customers c 
LEFT JOIN Orders o ON c.CustomerID = o.CustomerID
inner join [Order Details] od on o.OrderID = od.OrderID
ORDER BY c.ContactName
GO

--9) Encuentra el número total de órdenes realizadas por cada cliente.

SELECT c.CustomerID, c.CompanyName, COUNT(o.OrderID) AS Total_Ordenes FROM Customers c
LEFT JOIN Orders o ON c.CustomerID = o.CustomerID
GROUP BY c.CustomerID, c.CompanyName
ORDER BY c.CompanyName

/*10) Encontrar los proveedores que han suministrado más de 3 productos. Primero,
agrupamos los productos por proveedor y contamos el número de productos
suministrados por cada proveedor. Luego, usamos HAVING para filtrar solo
aquellos proveedores que han suministrado más de 3 productos*/

SELECT p.SupplierID, s.CompanyName AS Supplier, COUNT(p.ProductID) AS Total_Products FROM Products p
INNER JOIN Suppliers s ON p.SupplierID = s.SupplierID
GROUP BY p.SupplierID, s.CompanyName
HAVING COUNT(p.ProductID) > 3
ORDER BY Total_Products DESC

/*11) Realizar un procedimiento almacenado que devuelva los clientes (Customers)
según el país (Country).*/

GO
CREATE PROCEDURE getCustomers_Country
@Country NVARCHAR(60)  
AS
BEGIN
SELECT CustomerID, CompanyName, ContactName, City, Country FROM Customers
WHERE Country = @Country
ORDER BY CompanyName
END

EXEC getCustomers_Country @Country = 'ARGENTINA'