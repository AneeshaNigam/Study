#include<iostream>
using namespace std;
class Hero{
    public:
    int Health;
    int Level;
    char *name;
    void printout(){
        cout<<"["<<this->Health<<",";
        cout<<this->Level<<",";
        cout<<this->name<<"]"<<endl;
    }
    Hero(){
        this->Health=100;
        this->Level=10;
        name= new char[100];
    }
    void setName(char name[]){
        strcpy(this->name,name);
    }
};
int main(){
    Hero Sameer;
    Sameer.setName((char*)"Haiya");
    

    Hero Aneesha(Sameer);
    
    // Sameer.Health=100;
    // Aneesha.Health=99;

    // Sameer.Level=1002;
    // Aneesha.Level=1000;

    Sameer.printout();
    Aneesha.printout();
    Aneesha.setName((char*) "No");
    Sameer.printout();
    Aneesha.printout();    

}