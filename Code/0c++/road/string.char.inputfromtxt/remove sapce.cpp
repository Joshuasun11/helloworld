#include<iostream>
#include<string>
#include<cstring>
#include<fstream>
using namespace std;

int main(){
    string str;
    ifstream input("without punct.txt");
    ofstream output("ready_to_search.txt");

    if(input.fail())
    {
        cout<<"fail to open the text file."<<endl;
    }

    while (input>>str)
    {
        output<<str<<" ";
        cout<<str;
    }
    input.close();
    output.close();

   
    return 0;
    
}