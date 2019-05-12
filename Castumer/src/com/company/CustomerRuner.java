package com.company;

import java.util.*;

 class CustomerRuner {

     void customAction() {

        // create object
        Customer customer1 = new Customer();
        Customer customer2 = new Customer();
        Customer customer3 = new Customer();
        Customer customer4 = new Customer();
        Customer customer5 = new Customer();

        //set id
        customer1.setId("01");
        customer2.setId("02");
        customer3.setId("03");
        customer4.setId("04");
        customer5.setId("05");

        //set Surname
        customer1.setSurname("Иванов");
        customer2.setSurname("Бобров");
        customer3.setSurname("Сидоров");
        customer4.setSurname("Козлов");
        customer5.setSurname("Стрижов");

        //set Name
        customer1.setName("Иван");
        customer2.setName("Павел");
        customer3.setName("Данил");
        customer4.setName("Кирил");
        customer5.setName("Сергей");

        //set Patronymic
        customer1.setPatronymic("Иванович");
        customer2.setPatronymic("Павлович");
        customer3.setPatronymic("Данилович");
        customer4.setPatronymic("Кирилович");
        customer5.setPatronymic("Сергеевич");

        //set Address
        customer1.setAddress("Жилябова 2 кв. 4");
        customer2.setAddress("Артема 7 кв. 5");
        customer3.setAddress("Ленина 15 кв. 10");
        customer4.setAddress("Григорьева 11 кв. 14");
        customer5.setAddress("Смирнова Ласточки 17 кв. 20");

        //set credit card id
        customer1.setPhone_number(19856757801L);
        customer2.setPhone_number(19856757802L);
        customer3.setPhone_number(19856757803L);
        customer4.setPhone_number(19856757804L);
        customer5.setPhone_number(19856757805L);

        //set medcard
         customer1.setNum_med_card(23);
         customer2.setNum_med_card(77);
         customer3.setNum_med_card(29);
         customer4.setNum_med_card(56);
         customer5.setNum_med_card(121);

         //set diagnoz
         customer1.setDiagnoz("мигрень");
         customer2.setDiagnoz("головокружение");
         customer3.setDiagnoz("Сломана нога");
         customer4.setDiagnoz("мигрень");
         customer5.setDiagnoz("горло");


        // add customers to ArrayList customersList
        ArrayList<Customer> customersList = new ArrayList<Customer>();
        customersList.add(customer1);
        customersList.add(customer2);
        customersList.add(customer3);
        customersList.add(customer4);
        customersList.add(customer5);


        customersCardFilter(customersList);
         customersDiagnozFilter(customersList,"мигрень");
         customersDiagnozFilter(customersList,null);

    }

    private  void customersCardFilter(ArrayList<Customer> customersList) {
        //customer which have Credit card in specified interval 19856757802 - 19856757804
        long startCustomersFilter = 19;
        long finishCustomersFilter = 30;
        long customerVar;
        System.out.println("Выборка покупателей по фильтру кредитных карт c 19 по 30");
        for (Customer customerValue : customersList) {
            customerVar = customerValue.getNum_med_card();
            if (startCustomersFilter <= customerVar && finishCustomersFilter >= customerVar )
                System.out.println(customerValue.toString());
        }
    }

    private  void  customersDiagnozFilter(ArrayList<Customer> customersList, String diagnoz) {
        //List of customers in alphabet order
        TreeMap<String, List<Customer>> customersMap = new TreeMap<String, List<Customer>>();
        String customerVarD;
        for (Customer customerValue : customersList) {
            customerVarD = customerValue.getDiagnoz();
            List<Customer> lc= customersMap.get(customerVarD);
            if (lc==null) {
                lc = new ArrayList<Customer>();
            }
            lc.add(customerValue);
            customersMap.put(customerVarD, lc);
        }

        if ( diagnoz!=null && diagnoz !=""){
            List<Customer> items =customersMap.get(diagnoz);
            System.out.println("Выборка пациентов по диагнозу :"+diagnoz);
            for (Customer customerValue : items) {
                System.out.println(customerValue.toString());
            }
        } else{
            for (String key : customersMap.keySet()) {
                List<Customer> items =customersMap.get(key);
                System.out.println("Диагноз: "+key);
                for (Customer customerValue : items) {
                    System.out.println(customerValue.toString());
                }
            }
        }


    }


}