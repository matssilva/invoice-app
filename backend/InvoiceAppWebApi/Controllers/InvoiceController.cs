using InvoiceAppWebApi.Business;
using InvoiceAppWebApi.Models;
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

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _invoiceBusiness.GetAllAsync());
        }

        [HttpPost]
        public async Task<IActionResult> Add(InvoiceModel invoiceModel)
        {
            string createdId = await _invoiceBusiness.AddAsync(invoiceModel);
            return Ok(createdId);
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(string id)
        {
            await _invoiceBusiness.DeleteAsync(id);
            return Ok(id);
        }

        [HttpPut]
        public async Task<IActionResult> Update(InvoiceModel invoiceModel)
        {
            await _invoiceBusiness.UpdateAsync(invoiceModel);
            return Ok();
        }
    }
}
