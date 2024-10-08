package com.vidyanidhi.computerseekho.services;

import java.util.List;
import java.util.Optional;

import com.vidyanidhi.computerseekho.entities.Enquiry;
import com.vidyanidhi.computerseekho.entities.Staff;

public interface StaffManager {
	void addStaff(Staff s);
	List <Staff> getStaff();
	void delete(int id);
	void updateStaffData(Staff s,int id);
	Optional <Staff> getStaff(int id);
	
	Staff stafflogin(String name);
	
	public List<Enquiry> getAllEnquiriesForStaff(int staffId);
}
