using Google.Cloud.Firestore;
using Newtonsoft.Json;

namespace InvoiceAppWebApi.Entities
{
    [FirestoreData]
    public class Item
    {
        [FirestoreProperty]
        [JsonProperty("name")]
        public string Name { get; set; }
        [FirestoreProperty]
        [JsonProperty("quantity")]
        public int Quantity { get; set; }
        [FirestoreProperty]
        [JsonProperty("price")]
        public double Price { get; set; }
        [FirestoreProperty]
        [JsonProperty("total")]
        public double Total { get; set; }
    }
}
