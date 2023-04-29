using Microsoft.AspNetCore.Mvc;
using ReactJoelHiltonAPI.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactJoelHiltonAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        public MoviesDbContext context;
        public MovieController(MoviesDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            return context.Movies
                .Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title)
                .ToArray();
        }

    }
}
