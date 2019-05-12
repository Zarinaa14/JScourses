package com.company;
//3.	 Patient: id, Фамилия, Имя, Отчество, Адрес, Телефон, Номер медицинской карты, Диагноз
public class Customer {
    private String id;
    private String surname;
    private String name;
    private String patronymic;
    private String address;
    private long  phone_number;
    private long  num_med_card;
    private String diagnoz;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPatronymic() {
        return patronymic;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public long getPhone_number() {
        return phone_number;
    }
    public void setPhone_number(long phone_number) {
        this.phone_number = phone_number;
    }

    public long getNum_med_card() {
        return num_med_card;
    }
    public void setNum_med_card(long num_med_card) {
        this.num_med_card = num_med_card;
    }
    public String getDiagnoz() {
        return diagnoz;
    }
    public void setDiagnoz(String diagnoz) {
        this.diagnoz = diagnoz;
    }


    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder()

                .append("ФИО: ")
                .append(surname)
                .append(" ")
                .append(name)
                .append(" ")
                .append(patronymic)
                .append(" Адресс: ")
                .append(address)
                .append(" ")
                .append("Номер телефона: ")
                .append(phone_number)
                .append(" ")
                 .append("Номер медецинской карты: ")
                 .append(num_med_card)
                 .append(" ")
                .append("Диагноз: ")
                .append(diagnoz);
        return sb.toString();
    }
}