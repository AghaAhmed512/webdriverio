// Encapsulation:
// A mechanism of restricting direct access to some of the object's components.
// A mechanism of bundling data with methods that operate 

class Employee {
    setEmployeeDetails(name, id, phoneNo){
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }

    getEmployeeName(){
        return this.name;
    }

    getEmployeeId(){
        return this.id;
    }

    getEmployeePhoneNo(){
        return this.phoneNo;
    }
}

const employee1 = new Employee();
employee1.setEmployeeDetails('Hafiz Agha Muhammad Ahmed Mehmood',1324,'03024116225');
console.log(employee1.getEmployeeName());
console.log(employee1.getEmployeeId());
console.log(employee1.getEmployeePhoneNo());