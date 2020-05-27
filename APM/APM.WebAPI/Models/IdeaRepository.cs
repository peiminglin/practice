using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;

namespace APM.WebAPI.Models
{
    public class IdeaRepository
    {
        string filePath;
        List<Idea> ideas;

        public IdeaRepository()
        {
            filePath = HostingEnvironment.MapPath(@"~/App_Data/ideas.json");
            ideas = Retrieve();
        }

        internal Idea Create()
        {
            return new Idea
            {
                Id = 0,
                Tags = new List<string>(),
                CreateDate = DateTime.Now
            };
        }

        internal bool Save(Idea idea)
        {
            //var ideas = Retrieve();

            if (idea.Id == 0)
            {
                var maxId = ideas.Max(i => i.Id);
                idea.Id = maxId + 1;
                ideas.Add(idea);
            }
            else
            {
                var index = ideas.FindIndex(i => i.Id == idea.Id);
                if (index >= 0)
                {
                    ideas[index] = idea;
                }
                else
                {
                    Console.WriteLine("Failed saving data.");
                    return false;
                }
            }

            return WriteData(ideas);
        }

        internal List<Idea> FindWithTag(string tag)
        {
            return ideas.FindAll(i => i.Tags.Contains(tag));
        }

        internal List<Idea> FindWithCat(string catalogue)
        {
            return ideas.FindAll(i => i.Catalogue.Equals(catalogue, StringComparison.OrdinalIgnoreCase));
        }

        internal Idea Find(int id)
        {
            //var ideas = Retrieve();
            var index = ideas.FindIndex(i => i.Id == id);

            return index >= 0 ? ideas[index] : null;
        }

        internal bool Delete(int id)
        {
            //var ideas = Retrieve();
            var index = ideas.FindIndex(i => i.Id == id);
            if (index >= 0)
            {
                ideas.RemoveAt(index);
                return WriteData(ideas);
            }
            else
            {
                Console.WriteLine("Can't find the item.");
                return false;
            }
        }

        internal List<Idea> Retrieve()
        {
            var json = System.IO.File.ReadAllText(filePath);
            var ideas = JsonConvert.DeserializeObject<List<Idea>>(json);

            return ideas;
        }

        private bool WriteData(List<Idea> ideas)
        {
            var json = JsonConvert.SerializeObject(ideas, Formatting.Indented);
            try
            {
                System.IO.File.WriteAllText(filePath, json);
            }
            catch
            {
                Console.WriteLine("Failed writing data.");
                return false;
            }

            return true;
        }

    }
}