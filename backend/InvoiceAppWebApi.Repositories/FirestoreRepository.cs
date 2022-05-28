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

        public async Task AddAsync(Invoice invoice)
        {
            CollectionReference invoicesCollection = _database.Collection("invoices");
            await invoicesCollection.AddAsync(invoice);
        }

        public async Task DeleteAsync(string id)
        {
            DocumentReference invoiceRef = _database.Collection("invoices").Document(id);
            await invoiceRef.DeleteAsync();
        }

        public async Task<IEnumerable<Invoice>> GetAllAsync()
        {
            List<Invoice> list = new();
            CollectionReference invoicesCollection = _database.Collection("invoices");
            QuerySnapshot snapshot = await invoicesCollection.GetSnapshotAsync();
            foreach (DocumentSnapshot documentSnapshot in snapshot.Documents)
            {
                Dictionary<string, object> document = documentSnapshot.ToDictionary();
                string json = JsonConvert.SerializeObject(document);
                Invoice invoice = JsonConvert.DeserializeObject<Invoice>(json);
                invoice.DocumentId = documentSnapshot.Id;
                list.Add(invoice);
            }
            return list;
        }
    }
}
