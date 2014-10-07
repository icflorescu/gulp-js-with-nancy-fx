namespace Web
{
    using Nancy;

    public class IndexModule : NancyModule
    {
        public IndexModule()
        {
            Get["/"] = parameters =>
            {
                ViewBag.Title = "Gulp.js with NancyFx";
                return View["index"];
            };
        }
    }
}