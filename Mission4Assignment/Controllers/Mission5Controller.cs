using Microsoft.AspNetCore.Mvc;
using Mission4Assignment.Models;
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
        [HttpGet]
        public IActionResult Calculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Calculator(CalculatorModel model)
        {
            return View();
        }
    }
}
