using Google.Cloud.Firestore;
using InvoiceAppWebApi.Entities;
using Newtonsoft.Json;

namespace InvoiceAppWebApi.Repositories
{
    public class FirestoreRepository : IFirestoreRepository
    {
        private readonly FirestoreDb _database;

        public FirestoreRepository(FirestoreDb database)
        {
            _database = database;
        }
        public async Task<IEnumerable<Invoice>> GetAll()
        {
            List<Invoice> list = new();
            CollectionReference invoicesCollection = _database.Collection("invoices");
            QuerySnapshot snapshot = await invoicesCollection.GetSnapshotAsync();
            foreach (DocumentSnapshot documentSnapshot in snapshot.Documents)
            {
                Dictionary<string, object> document = documentSnapshot.ToDictionary();
                string json = JsonConvert.SerializeObject(document);
                Invoice invoice = JsonConvert.DeserializeObject<Invoice>(json);
                list.Add(invoice);
            }
            return list;
        }
    }
}
