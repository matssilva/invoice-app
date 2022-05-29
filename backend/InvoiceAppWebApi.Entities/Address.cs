using Google.Cloud.Firestore;
using Newtonsoft.Json;

namespace InvoiceAppWebApi.Entities
{
    [FirestoreData]
    public class Address
    {
        [FirestoreProperty("street")]
        [JsonProperty("street")]
        public string Street { get; set; }
        [FirestoreProperty("city")]
        [JsonProperty("city")]
        public string City { get; set; }
        [FirestoreProperty("postCode")]
        [JsonProperty("postCode")]
        public string PostCode { get; set; }
        [FirestoreProperty("country")]
        [JsonProperty("country")]
        public string Country { get; set; }
    }
}
