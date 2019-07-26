using System;
using System.Collections.Generic;
using to_do_list.Context;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace to_do_list
{
    public static class ToDoListData
    {
        public static List<Category> GetCategory()
        {
            //this sets up the db connection 
            using (var db = new To_Do_ListContext())
            {
                //ToList() is a built-in method, and this is putting everything in the Category table into a list
                return db.Category.ToList();
            }
        }

        public static int Create(string catName)
        {
            var db = new To_Do_ListContext();
            var category = new Category {Name = catName};
            db.Category.Add(category);
            db.SaveChanges();
            return 1;
        }
    }
}