package com.metacube.empmgmt.exception;

public class SystemException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1315055930129311879L;

	public SystemException(String message) {
		super(message);
	}

	public SystemException(String message, Throwable e) {
		super(message, e);
	}

}
