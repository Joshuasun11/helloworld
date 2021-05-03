#include<iostream>
#include<string>
#include<cstring>
#include<fstream>


//#include <ctype.h>
//#include <algorithm>

#include <cctype>
//#include <regex>

using namespace std;
int main()
{
    string tran;
    //char tran[100]
    string s;
    string x[500];
    int inputlen = 0;
    int i = 0;
    int m = 0;
    int times = 0;

   ifstream wi("without punct.txt");

   if(wi.fail())
   {
       cout<<"can not open the file"<<endl;
       cout<<"**Exit program**"<<endl;
       return 0;
   }
   
//wi>>noskipws;
cout<<"received: "<<endl;
    while(wi>>tran)
    //while(getline(wi,tran))
    {
        //if(tran = '\n')
        //cout<<endl;
        //else
        cout<<tran<<endl;
        x[m]=tran;
        m++;
        //getline(wi,tran);
        /*
         for (string::size_type m = 0; m <= tran.size(); m++)        
                {
                        x += tran[m];          
                }
        */
        inputlen++;

       // regex newlines_re("\n+");
    }

    wi.close();
    //cout<<x[2]<<endl;
    //cout<<sizeof(string);
     cout<<endl;
     //inputlen = sizeof(tran)/sizeof(string);
     cout<<"totally "<<inputlen<<" words"<<endl;
     //cout<<tran[2]<<endl;
     //cout<<"+++++++++"<<tran[2]<<"+++++++++++++"<<endl;

     cout<<"enter the word you want to search: ";
     getline(cin,s);

     for (int count = 0; count<=inputlen+1; count++)
    {
    if (s == x[count])
    //if (s == wordpool[count])  
    {
        times++;
        i = 1;
    }
    }

    if(i == 1)
        cout<<"found the word: "<<"'"<<s<<"'"<<" and it appears: "<<times<<" times"<<endl;

    else if (i == 0)
        cout<<"can not find the word: "<<s<<endl;

       
    
    //cout<<"received: "<<endl;
   /* for (int a = 0; a <= inputlen; a++)
    {
        cout<<tran[a]<<endl;
    }
    */  
   
    return 0;
}