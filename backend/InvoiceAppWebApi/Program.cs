using Google.Cloud.Firestore;
using InvoiceAppWebApi.Business;
using InvoiceAppWebApi.CrossCutting;
using InvoiceAppWebApi.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IFirestoreRepository, FirestoreRepository>();
builder.Services.AddScoped<IInvoiceBusiness, InvoiceBusiness>();
builder.Services.AddSingleton<FirestoreDb>(_ =>
{
    return FirestoreDb.Create("invoices-app-a14e3");
});
builder.Services.AddAutoMapper(typeof(AutoMapperConfig));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
