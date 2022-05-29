using Google.Cloud.Firestore;
using Newtonsoft.Json;

namespace InvoiceAppWebApi.Entities
{
    [FirestoreData]
    public class Item
    {
        [FirestoreProperty("name")]
        [JsonProperty("name")]
        public string Name { get; set; }
        [FirestoreProperty("quantity")]
        [JsonProperty("quantity")]
        public int Quantity { get; set; }
        [FirestoreProperty("price")]
        [JsonProperty("price")]
        public double Price { get; set; }
        [FirestoreProperty("total")]
        [JsonProperty("total")]
        public double Total { get; set; }
    }
}
