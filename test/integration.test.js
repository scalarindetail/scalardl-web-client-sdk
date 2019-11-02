describe('ClientService', () => {
  const {ClientService} = require('../scalardl-web-client-sdk.js');
  const properties = {
    'scalar.ledger.client.server_host': '127.0.0.1',
    'scalar.ledger.client.server_port': 80,
    'scalar.ledger.client.server_privileged_port': 8080,
    'scalar.ledger.client.cert_holder_id': `foo@${Date.now()}`,
    'scalar.ledger.client.private_key_pem': `-----BEGIN EC PRIVATE KEY-----
MHcCAQEEICcJGMEw3dyXUGFu/5a36HqY0ynZi9gLUfKgYWMYgr/IoAoGCCqGSM49
AwEHoUQDQgAEBGuhqumyh7BVNqcNKAQQipDGooUpURve2dO66pQCgjtSfu7lJV20
XYWdrgo0Y3eXEhvK0lsURO9N0nrPiQWT4A==
-----END EC PRIVATE KEY-----
`,
    'scalar.ledger.client.cert_pem': `-----BEGIN CERTIFICATE-----
MIICizCCAjKgAwIBAgIUMEUDTdWsQpftFkqs6bCd6U++4nEwCgYIKoZIzj0EAwIw
bzELMAkGA1UEBhMCSlAxDjAMBgNVBAgTBVRva3lvMQ4wDAYDVQQHEwVUb2t5bzEf
MB0GA1UEChMWU2FtcGxlIEludGVybWVkaWF0ZSBDQTEfMB0GA1UEAxMWU2FtcGxl
IEludGVybWVkaWF0ZSBDQTAeFw0xODA5MTAwODA3MDBaFw0yMTA5MDkwODA3MDBa
MEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJ
bnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNC
AAQEa6Gq6bKHsFU2pw0oBBCKkMaihSlRG97Z07rqlAKCO1J+7uUlXbRdhZ2uCjRj
d5cSG8rSWxRE703Ses+JBZPgo4HVMIHSMA4GA1UdDwEB/wQEAwIFoDATBgNVHSUE
DDAKBggrBgEFBQcDAjAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBRDd2MS9Ndo68PJ
y9K/RNY6syZW0zAfBgNVHSMEGDAWgBR+Y+v8yByDNp39G7trYrTfZ0UjJzAxBggr
BgEFBQcBAQQlMCMwIQYIKwYBBQUHMAGGFWh0dHA6Ly9sb2NhbGhvc3Q6ODg4OTAq
BgNVHR8EIzAhMB+gHaAbhhlodHRwOi8vbG9jYWxob3N0Ojg4ODgvY3JsMAoGCCqG
SM49BAMCA0cAMEQCIC/Bo4oNU6yHFLJeme5ApxoNdyu3rWyiqWPxJmJAr9L0AiBl
Gc/v+yh4dHIDhCrimajTQAYOG9n0kajULI70Gg7TNw==
-----END CERTIFICATE-----
`,
    'scalar.ledger.client.cert_version': 1,
    'scalar.ledger.client.tls.enabled': false,
  };
  const clientService = new ClientService(properties);

  it('has registerCertificate that should work as expected', async () => {
    response = await clientService.registerCertificate();
    assert.equal(response.getStatus(), 200);
  });
});
