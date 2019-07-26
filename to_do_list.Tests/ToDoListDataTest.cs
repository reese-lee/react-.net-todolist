using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using to_do_list.Context;

namespace to_do_list.Tests
{
    [TestClass]
    public class ToDoListDataTest
    {
        [TestMethod]
        public void Test_SaveNewCategoryToDatabase_Category()
        {
            //arrange           
            //act
            var db = new To_Do_ListContext();
            var category = new Category {Name = "aliens"};
            db.Category.Add(category);
    
            //assert
            System.Console.WriteLine(testQuestion.Prompt);
            System.Console.WriteLine(testQuestion.Option1);
            System.Console.WriteLine(testQuestion.Option2);
            System.Console.WriteLine(testQuestion.Option3);
            System.Console.WriteLine(testQuestion.CorrectAnswer);
            System.Console.WriteLine(total);
            // switch (testQuestion.CorrectAnswer) {
            //     case 1:
            //         Assert.AreEqual(total.ToString(), testQuestion.Option1); 
            //         break;
            //     case 2:
            //         Assert.AreEqual(total.ToString(), testQuestion.Option2); 
            //         break;
            //     case 3:
            //         Assert.AreEqual(total.ToString(), testQuestion.Option3); 
            //         break;
            // }
            Assert.AreEqual(total, 3);
        }

    }
}