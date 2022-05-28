namespace InvoiceAppWebApi.Repositories
{
    public class FirestoreRepository : IFirestoreRepository
    {
        public async Task<IEnumerable<object>> GetAll()
        {
            var task = Task.Run(() =>
            {
                var list = new[] { new { Name = "Teste" }, new { Name = "Teste2" } }.ToList();
                return list;
            });

            return await task;
        }
    }
}
