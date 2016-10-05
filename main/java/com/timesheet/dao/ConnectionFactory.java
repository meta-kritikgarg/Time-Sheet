package com.metacube.empmgmt.dao;


import com.metacube.empmgmt.exception.SystemException;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {
	
	private static ConnectionFactory connectionFactory = new ConnectionFactory();
	
	public static ConnectionFactory getInstance() {
		return connectionFactory;
	}
	
	public Connection getConnection() throws SystemException {
		Connection connection = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/DEMO?characterEncoding=UTF-8", "demo", "demo");
		} catch (ClassNotFoundException e) {
			throw new SystemException("Please add mysql jars in classpath");
		} catch (SQLException e) {
			throw new SystemException("Please check database configuration");
		}
		return connection;
	}

	public void closeConnection(Connection connection) {
		if(connection != null) {
			try {
				connection.close();
			} catch (SQLException e) {
				System.out.println("Could not close connection.");
			}
		}
	}
}
