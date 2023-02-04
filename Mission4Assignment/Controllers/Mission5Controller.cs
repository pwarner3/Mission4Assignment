using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4Assignment.Controllers
{
    public class Mission5Controller : Controller
    {
        //Index page view
        public IActionResult Index()
        {
            return View();
        }

        //Calculator page view
        public IActionResult Calculator()
        {
            return View();
        }
    }
}
