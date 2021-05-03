#include<iostream>
#include<string>
#include<cstring>
#include<cctype>
#include<fstream>
#define MAX 1024

using namespace std;


int main(){
    //cout<<"beautiful world"<<'\n'<<"no";
    
    //string s[] = {"beautiful", " yes ", "no!"};
    string a[MAX];
    string b;
    int i = 0;
    //int len = 0;
    //len = sizeof(s)/sizeof(string);

    ifstream input("test.txt");
    if(input.fail())
    {
        cout<<"can not open file";
        cout<<"system out";
        return 0;
    }
    
    while(getline(input,b))
    {
        cout<<b;
    }

    //cout<<endl<<"string members: "<<len;
    
    return 0;
}