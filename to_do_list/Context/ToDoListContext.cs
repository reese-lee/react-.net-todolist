using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System;

namespace to_do_list.Context
{

    public class To_Do_ListContext : DbContext
    {

        public DbSet<Category> Category { get; set; }
        public DbSet<Item> Item { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseMySQL("server=localhost;database=to_do_list;user=root;password=root;port=8889;");
		}
    }

    public class Category
    {

        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Item
    {

        public int Id { get; set; }
        public string Task { get; set; }
        public DateTime DueDate { get; set; }
        public bool IsComplete { get; set; }
        public string CategoryName { get; set; }
        public int Cat_Id { get; set; }
    }
}