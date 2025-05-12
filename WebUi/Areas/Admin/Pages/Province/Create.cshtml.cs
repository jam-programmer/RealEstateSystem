using Application.Command.Province;
using Application.Common;
using Application.DataTransferObject;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebUi.Areas.Admin.Pages.Province;

public class CreateModel (IMediator mediator): PageModel
{
    readonly IMediator _mediator=mediator;
    [BindProperty]
    public ProvinceDto? Province { get; set; }
    public void OnGet()
    {
    }
    public async Task<IActionResult> OnPost(ProvinceDto? Province)
    {
        if (ModelState.IsValid)
        {
           BaseResult resultInsertProvince
                =await _mediator.Send(new InsertProvinceCommand(Province));
            if (resultInsertProvince.IsSuccess)
            {
                return RedirectToPage("Index");
            }
            ViewData["Error"] = resultInsertProvince.Message;
        }
        return Page();
    }
}
