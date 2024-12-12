package Training.JavaDemos.Lab_Assignment.lab_2;

import java.util.ArrayList;
import java.util.List;

class MeetingRoom {
    private String roomId;
    private int capacity;
    private String floor;

    public MeetingRoom(String roomId, int capacity, String floor) {
        this.roomId = roomId;
        this.capacity = capacity;
        this.floor = floor;
    }

    public String getRoomId() {
        return roomId;
    }

    public int getCapacity() {
        return capacity;
    }

    public String getFloor() {
        return floor;
    }

    public void getRoomDetails() {
        System.out.println("Room ID: " + roomId + ", Capacity: " + capacity + ", Floor: " + floor);
    }
}

class ZoomMeetingRoom extends MeetingRoom {
    private String zoomDeviceId;
    private String zoomAccountId;

    public ZoomMeetingRoom(String roomId, int capacity, String floor, String zoomDeviceId, String zoomAccountId) {
        super(roomId, capacity, floor);
        this.zoomDeviceId = zoomDeviceId;
        this.zoomAccountId = zoomAccountId;
    }

    public String getZoomDeviceId() {
        return zoomDeviceId;
    }

    public String getZoomAccountId() {
        return zoomAccountId;
    }

    public void getZoomDetails() {
        System.out.println("Zoom Device ID: " + zoomDeviceId + ", Zoom Account ID: " + zoomAccountId);
    }
}

class Employee {
    private String employeeId;
    private String name;

    public Employee(String employeeId, String name) {
        this.employeeId = employeeId;
        this.name = name;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public String getName() {
        return name;
    }

    public void getEmployeeDetails() {
        System.out.println("Employee ID: " + employeeId + ", Name: " + name);
    }
}

class MeetingBooking {
    private String bookingId;
    private String employeeId;
    private String meetingRoomId;
    private String meetingDate;
    private String meetingTime;
    private int duration;

    public MeetingBooking(String bookingId, String employeeId, String meetingRoomId, String meetingDate, String meetingTime, int duration) {
        this.bookingId = bookingId;
        this.employeeId = employeeId;
        this.meetingRoomId = meetingRoomId;
        this.meetingDate = meetingDate;
        this.meetingTime = meetingTime;
        this.duration = duration;
    }

    public String getMeetingDate() {
        return meetingDate;
    }

    public void getBookingDetails() {
        System.out.println("Booking ID: " + bookingId + ", Employee ID: " + employeeId + ", Room ID: " + meetingRoomId + 
                           ", Date: " + meetingDate + ", Time: " + meetingTime + ", Duration: " + duration + " minutes");
    }
}

class MeetingRoomManager {
    private List<MeetingRoom> meetingRooms;
    private List<MeetingBooking> bookings;

    public MeetingRoomManager() {
        meetingRooms = new ArrayList<>();
        bookings = new ArrayList<>();
    }

    public void addMeetingRoom(MeetingRoom room) {
        meetingRooms.add(room);
    }

    public void bookMeetingRoom(String bookingId, String employeeId, String meetingRoomId, String meetingDate, String meetingTime, int duration) {
        MeetingBooking booking = new MeetingBooking(bookingId, employeeId, meetingRoomId, meetingDate, meetingTime, duration);
        bookings.add(booking);
        System.out.println("Meeting Room booked successfully!");
    }

    public void getMeetingInfoByDate(String date) {
        for (MeetingBooking booking : bookings) {
            if (booking.getMeetingDate().equals(date)) {
                booking.getBookingDetails();
            }
        }
    }

    public void getAvailableRooms(String date, String time) {
        System.out.println("Available rooms for " + date + " at " + time + ":");
        for (MeetingRoom room : meetingRooms) {
            System.out.println("Room ID: " + room.getRoomId() + ", Capacity: " + room.getCapacity());
        }
    }
}

public class q1 {
    public static void main(String[] args) {
        MeetingRoom room1 = new MeetingRoom("R101", 10, "Floor 1");
        ZoomMeetingRoom zoomRoom = new ZoomMeetingRoom("R102", 15, "Floor 2", "Zoom123", "ZoomAcct456");

        // Employee emp1 = new Employee("E001", "Alice");
        // Employee emp2 = new Employee("E002", "Bob");

        MeetingRoomManager manager = new MeetingRoomManager();
        manager.addMeetingRoom(room1);
        manager.addMeetingRoom(zoomRoom);

        manager.bookMeetingRoom("B001", "E001", "R101", "2024-11-22", "10:00 AM", 60);
        manager.bookMeetingRoom("B002", "E002", "R102", "2024-11-22", "2:00 PM", 90);

        manager.getMeetingInfoByDate("2024-11-22");

        manager.getAvailableRooms("2024-11-22", "10:00 AM");
    }
}
