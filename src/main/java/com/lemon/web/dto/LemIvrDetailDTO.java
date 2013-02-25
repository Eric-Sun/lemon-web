package com.lemon.web.dto;

import java.util.Date;

public class LemIvrDetailDTO {

	private String channel;
	private String orderdest;
	private int total;
	private float feeincome;
	private Date subtime;
	public String getChannel() {
		return channel;
	}
	public void setChannel(String channel) {
		this.channel = channel;
	}
	public String getOrderdest() {
		return orderdest;
	}
	public void setOrderdest(String orderdest) {
		this.orderdest = orderdest;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public float getFeeincome() {
		return feeincome;
	}
	public void setFeeincome(float feeincome) {
		this.feeincome = feeincome;
	}
	public Date getSubtime() {
		return subtime;
	}
	public void setSubtime(Date subtime) {
		this.subtime = subtime;
	}
}
