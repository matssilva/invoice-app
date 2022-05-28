using InvoiceAppWebApi.Business;
using Microsoft.AspNetCore.Mvc;

namespace InvoiceAppWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly IInvoiceBusiness _invoiceBusiness;
        public InvoiceController(IInvoiceBusiness invoiceBusiness)
        {
            _invoiceBusiness = invoiceBusiness;
        }
        [HttpGet(Name = "Get")]
        public async Task<IActionResult> Get()
        {
            var list = await _invoiceBusiness.GetAllAsync();
            return Ok(list);
        }
    }
}
