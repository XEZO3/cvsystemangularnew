export class cvVm{
    Id:number=0
    Name :string|undefined
    PersonalId:number=0
    ExpId:number=0;
    personal:Personal = new Personal
    exp:Exp=new Exp
    // CompanyName: string|undefined
    // CityName: string|undefined
    // CompanyFeild: string|undefined
    // Email: string|undefined
    // PhoneNumber: number|undefined 

}

export class Personal{
    Id:number=0;
    FullName:string="test1234"
    CityName: string|undefined
    Email: string|undefined
    PhoneNumber: number|undefined 
}

export class Exp{
    Id:number=0
    CompanyName: string|undefined
    City: string|undefined
    CompanyField: string|undefined
}