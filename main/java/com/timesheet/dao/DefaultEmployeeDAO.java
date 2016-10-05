package com.metacube.empmgmt.dao;

import com.metacube.empmgmt.EmployeeType;
import com.metacube.empmgmt.dao.model.EmployeeModel;
import com.metacube.empmgmt.exception.SystemException;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Repository("defaultEmployeeDAO")
public class DefaultEmployeeDAO implements EmployeeDAO {
	
	private static String INSERT_EMPLOYEE_QUERY = "insert into EMPLOYEE (FIRST_NAME, LAST_NAME, EMPLOYEE_TYPE, MOBILE_NUMBER, EMAIL_ID, LAST_UPDATED_TIME, CREATED_TIME) values (?, ?, ?, ?, ?, ?, ?)";
	
	private static String SELECT_EMPLOYEE_QUERY = "select ID, FIRST_NAME, LAST_NAME, EMPLOYEE_TYPE, MOBILE_NUMBER, EMAIL_ID, LAST_UPDATED_TIME, CREATED_TIME from EMPLOYEE";
	
	private static String UPDATE_EMPLOYEE_QUERY = "update EMPLOYEE set FIRST_NAME = ?, EMPLOYEE_TYPE = ?, EMPLOYEE_TYPE, ?, MOBILE_NUMBER = ?, EMAIL_ID = ?, LAST_UPDATED_TIME = ?";
	
	public void createEmployee(EmployeeModel requestVO) throws SystemException {
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		try {
			connection = ConnectionFactory.getInstance().getConnection();
			preparedStatement = connection.prepareStatement(INSERT_EMPLOYEE_QUERY);
			preparedStatement.setString(1, requestVO.getFirstName());
			preparedStatement.setString(2, requestVO.getLastName());
			preparedStatement.setString(3, requestVO.getEmployeeType().name());
			preparedStatement.setInt(4, requestVO.getMobileNumber());
			preparedStatement.setString(5, requestVO.getEmailId());
			preparedStatement.setDate(6, new Date(System.currentTimeMillis()));
			preparedStatement.setDate(7, new Date(System.currentTimeMillis()));
			preparedStatement.execute();
		} catch (SQLException e) {
			throw new SystemException("Could not create Employee.");
		} finally {
			if(preparedStatement != null) {
				try {
					preparedStatement.close();
				} catch (SQLException e) {
					System.out.println("Could not close prepared statement");
				}
			}
			if(connection != null) {
				ConnectionFactory.getInstance().closeConnection(connection);
			}
		}
	}
	
	public EmployeeModel getEmployee(EmployeeModel requestVO) throws SystemException {
		EmployeeModel employeeVO = null;
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		
		try {
			connection = ConnectionFactory.getInstance().getConnection();
			String query = SELECT_EMPLOYEE_QUERY;
			if(requestVO.getId() > 0) {
				query += " where ID=?";
			} else {
				query += " where EMAIL_ID=?";
			}
			preparedStatement = connection.prepareStatement(query);
			if(requestVO.getId() > 0) {
				preparedStatement.setInt(1, requestVO.getId());
			} else {
				preparedStatement.setString(1, requestVO.getEmailId());
			}
			
			ResultSet resultSet = preparedStatement.executeQuery();
			while(resultSet.next()) {
				employeeVO = new EmployeeModel();
				employeeVO.setId(resultSet.getInt(1));
				employeeVO.setFirstName(resultSet.getString(2));
				employeeVO.setLastName(resultSet.getString(3));
				employeeVO.setEmployeeType(EmployeeType.valueOf(resultSet.getString(4)));
				employeeVO.setMobileNumber(resultSet.getInt(5));
				employeeVO.setEmailId(resultSet.getString(6));
				employeeVO.setLastUpdatedTime(resultSet.getDate(7));
				employeeVO.setCreatedTime(resultSet.getDate(1));
				break;
			}
		} catch (SQLException e) {
			throw new SystemException("Could not get Employee.");
		} finally {
			if(preparedStatement != null) {
				try {
					preparedStatement.close();
				} catch (SQLException e) {
					System.out.println("Could not close prepared statement");
				}
			}
			
			if(connection != null) {
				ConnectionFactory.getInstance().closeConnection(connection);
			}
		}
		return employeeVO;
	}
	
	public List<EmployeeModel> listEmployees(EmployeeModel requestVO) throws SystemException {
		List<EmployeeModel> employees = new ArrayList<EmployeeModel>();
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		String query = SELECT_EMPLOYEE_QUERY;
		boolean addedWhere = false;
		if(requestVO.getFirstName() != null) {
			query += " where lower(FIRST_NAME) like '%" + requestVO.getFirstName().toLowerCase() + "%'";
			addedWhere = true;
		}
		
		if(requestVO.getLastName() != null) {
			if(addedWhere) {
				query += " and ";
			} else {
				query += " where ";
				addedWhere = true;
			}
			query += "lower(LAST_NAME) like '%" + requestVO.getLastName().toLowerCase() + "%'";
		}
		try {
			connection = ConnectionFactory.getInstance().getConnection();
			preparedStatement = connection.prepareStatement(query);
			ResultSet resultSet = preparedStatement.executeQuery();
			EmployeeModel employeeVO = null;
			while(resultSet.next()) {
				employeeVO = new EmployeeModel();
				employeeVO.setId(resultSet.getInt(1));
				employeeVO.setFirstName(resultSet.getString(2));
				employeeVO.setLastName(resultSet.getString(3));
				employeeVO.setEmployeeType(EmployeeType.valueOf(resultSet.getString(4)));
				employeeVO.setMobileNumber(resultSet.getInt(5));
				employeeVO.setEmailId(resultSet.getString(6));
				employeeVO.setLastUpdatedTime(resultSet.getDate(7));
				employeeVO.setCreatedTime(resultSet.getDate(8));
				employees.add(employeeVO);
			}
		} catch (SQLException e) {
			throw new SystemException("Could not get employees", e);
		} finally {
			if(preparedStatement != null) {
				try {
					preparedStatement.close();
				} catch (SQLException e) {
					System.out.println("Could not close prepared statement");
				}
			}
			if(connection != null) {
				ConnectionFactory.getInstance().closeConnection(connection);
			}
		}
		return employees;
	}

	public List<EmployeeModel> listEmployees() throws SystemException {
		return listEmployees(new EmployeeModel());
	}
	
	public void updateEmployee(EmployeeModel requestVO) throws SystemException {
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		try {
			connection = ConnectionFactory.getInstance().getConnection();
			preparedStatement = connection.prepareStatement(UPDATE_EMPLOYEE_QUERY);
			preparedStatement.setString(1, requestVO.getFirstName());
			preparedStatement.setString(2, requestVO.getLastName());
			preparedStatement.setString(3, requestVO.getEmployeeType().name());
			preparedStatement.setInt(4, requestVO.getMobileNumber());
			preparedStatement.setString(5, requestVO.getEmailId());
			preparedStatement.setDate(6, new Date(System.currentTimeMillis()));
			preparedStatement.execute();
		} catch (SQLException e) {
			throw new SystemException("Could not update Employee.");
		} finally {
			if(preparedStatement != null) {
				try {
					preparedStatement.close();
				} catch (SQLException e) {
					System.out.println("Could not close prepared statement");
				}
			}
			if(connection != null) {
				ConnectionFactory.getInstance().closeConnection(connection);
			}
		}
	}

	@Override
	public void deleteEmployee(EmployeeModel employeeModel) {

	}
}
