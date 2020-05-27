using APM.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace APM.WebAPI.Controllers
{
    [EnableCorsAttribute("http://localhost:55745", "*", "*")]
    public class IdeasController : ApiController
    {
        IdeaRepository repository;

        public IdeasController()
        {
            repository = new IdeaRepository();
        }
        // GET: api/Ideas
        public IEnumerable<Idea> Get()
        {
            return repository.Retrieve();
        }

        public IEnumerable<Idea> Get(string tag)
        {
            return repository.FindWithTag(tag);
        }

        [Route("api/ideas/{catalogue}")]
        [HttpGet]
        public IEnumerable<Idea> GetCat(string catalogue)
        {
            return repository.FindWithCat(catalogue);
        }

        // GET: api/Ideas/5
        public Idea Get(int id)
        {
            if (id == 0)
                return repository.Create();
            return repository.Find(id);
        }

        // POST: api/Ideas
        public void Post([FromBody]Idea idea)
        {
            var newIdea = repository.Create();
            newIdea.Catalogue = idea.Catalogue;
            newIdea.Name = idea.Name;
            newIdea.Description = idea.Description;
            if (idea.Tags != null)
                newIdea.Tags = new List<string>(idea.Tags);
            repository.Save(newIdea);
        }

        // PUT: api/Ideas/5
        public void Put(int id, [FromBody]Idea idea)
        {
            var originIdea = repository.Find(id);
            originIdea.Catalogue = idea.Catalogue;
            originIdea.Name = idea.Name;
            originIdea.Description = idea.Description;
            originIdea.Tags.Clear();
            originIdea.Tags.AddRange(idea.Tags);
            repository.Save(originIdea);
        }

        // DELETE: api/Ideas/5
        public void Delete(int id)
        {
            repository.Delete(id);
        }
    }
}
