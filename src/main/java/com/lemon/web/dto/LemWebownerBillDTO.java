package com.lemon.web.dto;

import java.util.Date;

public class LemWebownerBillDTO {

	private Date billdate;
	private int showcount;
	private float showincome;
	private int payflag;
	private Date paytime;
	public Date getBilldate() {
		return billdate;
	}
	public void setBilldate(Date billdate) {
		this.billdate = billdate;
	}
	public int getShowcount() {
		return showcount;
	}
	public void setShowcount(int showcount) {
		this.showcount = showcount;
	}
	public float getShowincome() {
		return showincome;
	}
	public void setShowincome(float showincome) {
		this.showincome = showincome;
	}
	public int getPayflag() {
		return payflag;
	}
	public void setPayflag(int payflag) {
		this.payflag = payflag;
	}
	public Date getPaytime() {
		return paytime;
	}
	public void setPaytime(Date paytime) {
		this.paytime = paytime;
	}
	
}
