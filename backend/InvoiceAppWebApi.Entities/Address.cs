using Google.Cloud.Firestore;
using Newtonsoft.Json;

namespace InvoiceAppWebApi.Entities
{
    [FirestoreData]
    public class Address
    {
        [FirestoreProperty]
        [JsonProperty("street")]
        public string Street { get; set; }
        [FirestoreProperty]
        [JsonProperty("city")]
        public string City { get; set; }
        [FirestoreProperty]
        [JsonProperty("postCode")]
        public string PostCode { get; set; }
        [FirestoreProperty]
        [JsonProperty("country")]
        public string Country { get; set; }
    }
}
