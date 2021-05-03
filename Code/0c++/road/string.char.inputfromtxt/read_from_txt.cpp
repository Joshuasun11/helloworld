/*
    read txt file, find word in txt

   string::size_type 在for loop里相当于定义一个大小，但是它可以定义任意大小的string
*/

#include<iostream>
#include<string>
#include<cstring>
#include<fstream>
#include<algorithm>

//#include <ctype.h>
//#include <algorithm>

#include <cctype>

using namespace std;

int main(){

    string s;  
    string tran;
    //char s[100];
    string op;
    //int i = 0;
    int inputlen = 0;
   

    ifstream input("1.txt");
    ofstream output("without punct.txt");
    if (input.fail())
    {
        cout<<"can not find the txt file"<<endl;
        cout<<"Exit program"<<endl;
        return 0;
    }

    //char wordpool[100];//输入字符串，多数用于遇到空格符换行
    string wordpool; //用于输入整篇文本，多行输入，遇换行符换行
 //char buf[1024];

    //while (!input.eof())
     cout<<"============================="<<endl;
    //cout<<"recorded words: "<<endl;
    cout<<"system processing, deleting symboles......"<<endl;
    cout<<"============================="<<endl;
    while(getline(input,wordpool))
    {

            for (string::size_type m = 0; m <= wordpool.size(); m++)        
                {
                    if (!ispunct(wordpool[m]))
                    {   
                        op += wordpool[m];
                    }
                } 
        //input>>wordpool[inputlen];//对应char wordpool来读取字符串，遇空格换行
        //cin.getline(wordpool, 100); //向txt文档从键盘输出字符串
        //getline(input,wordpool);//对应string wordpool 可读整行文本文档。,
                                    //多行文本只存入最后一行。
        //cout<<wordpool<<endl; 
        //inputlen++;
      
    }
    input.close();
    input.clear();
/*
    wordpool.erase( 
		remove_if ( wordpool.begin(), wordpool.end(), static_cast<int(*)(int)>(&ispunct) ), 
		wordpool.end());
*/
    //cout<<"totally "<<inputlen<<" words"<<endl;//此程序里无法计算单词量，因为是按字母读取的txt

/*
    //for (int a = 0; a <= inputlen; a++)
    {
        cout<<wordpool[i]<<endl;
    }
    */    
    //inputlen = sizeof(wordpool);

    //inputlen = sizeof(wordpool)/sizeof(string);
    //cout>>inputlen;

    //cout<<"Finding the word: ";
    //getline(cin,s);

//    op.erase(std::remove(op.begin(), op.end(), '\n'), op.end());
    

    cout<<"after deleting symboles: "<<op<<endl;
    output<<op<<endl;
/*
    for (int count = 0; count<=inputlen;count++)
    {
    if (s == op[count])
    //if (s == wordpool[count])  
    {
        cout<<"found the word: "<<s<<endl;
        i = 1;
    }
    }
    if (i == 0)
    {
        cout<<"can not find the word: "<<s<<endl;
    
    }
    */
   output.close();
   output.clear();

   /*//======================find a word======================

   ifstream fin("without punct.txt");

   if(fin.fail())
   {
       cout<<"can not open the file"<<endl;
       cout<<"**Exit program**"<<endl;
       return 0;
   }

    while(!fin.eof())
    {
        getline(fin,tran);
        inputlen++;
    }

     cout<<inputlen;

    cout<<"received: "<<endl;
    for (int a = 0; a <= 100; a++)
    {
        cout<<tran[a]<<endl;
    }
    cout<<"received: "<<endl;
 */  
    return 0;

}