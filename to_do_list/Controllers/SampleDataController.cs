using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc; 
using to_do_list.Context;

namespace to_do_list.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {

        [HttpGet("[action]")]
        public List<Category> GetCategories(int startDateIndex)
        {
            List<Category> category = ToDoListData.GetCategory();
            return category;
        }

        [HttpPost("[action]")]
        public int SaveCategory(string catName) 
        {
            return ToDoListData.Create(catName);
        }
    }
}
