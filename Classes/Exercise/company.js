
class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, job, department) {
        let employee = {};
        let employees = [];
        if (name == '' || salary == '' || job == '' || department == '' ||
            name == undefined || salary == undefined || job == undefined || department == undefined ||
            name == null || salary == null || job == null || department == null || salary < 0) { throw new Error('Invalid input!') }
        else {
            employee['name'] = name;
            employee['salary'] = Number(salary);
            employee['job'] = job;
            employee['department'] = department;
            if (Object.keys(this.departments).includes(department)) {
                let array = this.departments[department];
                array.push(employee);
                this.departments[department] = array;
            }
            else { employees.push(employee); this.departments[department] = employees; }
            return `New employee is hired. Name: ${name}. Position: ${job}`
        }
    }


    bestDepartment() {
        let bestDepartmentName = '';
        let bestDepartmentAvgSalary = 0;
        let bestDepartmentEmployees = [];

        for (let key in this.departments) {
            let currentEmployees = this.departments[key];
            let sumSalaries = 0;
            let length = currentEmployees.length;
            for (let employee of currentEmployees) {
                sumSalaries += employee.salary
            }
            let currentAvg = sumSalaries / length
            if (currentAvg > bestDepartmentAvgSalary) {
                bestDepartmentAvgSalary = currentAvg; bestDepartmentName = key; bestDepartmentEmployees = currentEmployees;
            }
        }

        let result = `Best Department is: ${bestDepartmentName}\n`;
        result += `Average salary: ${bestDepartmentAvgSalary.toFixed(2)}\n`;
        bestDepartmentEmployees
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .forEach(e => result += `${e.name} ${e.salary} ${e.job}\n`);

        return result.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
console.log(c.departments);
