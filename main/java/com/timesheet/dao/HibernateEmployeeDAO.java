package com.metacube.empmgmt.dao;

import com.metacube.empmgmt.dao.model.EmployeeModel;
import com.metacube.empmgmt.exception.SystemException;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Monil on 9/28/2016.
 */

@Repository(value = "hibernateEmployeeDAO")
public class HibernateEmployeeDAO implements EmployeeDAO {

    @Autowired
    private SessionFactory sessionFactory;

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public void createEmployee(EmployeeModel employeeModel) throws SystemException, SystemException {

    }

    @Override
    public List<EmployeeModel> listEmployees() throws SystemException {
        Session session = this.sessionFactory.getCurrentSession();
//        List<EmployeeModel> personsList = session.createQuery("from EmployeeModel").list();

        Criteria cr = session.createCriteria(EmployeeModel.class);
        List<EmployeeModel> personsList = cr.list();
        return personsList;
    }

    @Override
    public EmployeeModel getEmployee(EmployeeModel employeeModel) throws SystemException {
        return null;
    }

    @Override
    public void updateEmployee(EmployeeModel employeeModel) throws SystemException {

    }

    @Override
    public void deleteEmployee(EmployeeModel employeeModel) {

    }
}
