# mxtoolbox-connect
A node wrapper for [Mx Toolbox](https://mxtoolbox.com/user/api) API

## Usage

```
const mx = require("mxtoolbox-connect");
mx.lookup("https://example.com", "a", "#################################").then(
  (res) => {
    return res;
  }
);
```

OR

```
import { lookup } from "mxtoolbox-connect";
(async () => {
 const res = await lookup("https://example.com", "spf", "#################################");
 return res;
})();
```

## Response

```
{
  UID: null,
  ArgumentType: 'domain',
  Command: 'spf',
  IsTransitioned: false,
  CommandArgument: 'valuelabs.com',
  TimeRecorded: '2021-07-26T05:34:53.3416587-05:00',
  ReportingNameServer: 'ns8.valuelabs.net',
  TimeToComplete: '5137',
  RelatedIP: null,
  ResourceRecordType: 16,
  IsEmptySubDomain: false,
  IsEndpoint: false,
  HasSubscriptions: false,
  AlertgroupSubscriptionId: null,
  Failed: [],
  Warnings: [],
  Passed: [
    {
      ID: 361,
      Name: 'SPF Record Published',
      Info: 'SPF Record found',
      Url: 'https://mxtoolbox.com/Problem/spf/SPF-Record-Published?page=prob_spf&showlogin=1&hidetoc=1&action=spf:valuelabs.com',
      PublicDescription: null,
      IsExcludedByUser: false
    }
  ],
  Timeouts: [],
  Errors: [],
  IsError: false,
  Information: [
    {
      Prefix: '',
      Type: 'v',
      Value: 'spf1',
      PrefixDesc: '',
      Description: 'The SPF record version',
      RecordNum: null
    }
  ],
  MultiInformation: [],
  Transcript: [
    {}
  ],
  MxRep: 0,
  EmailServiceProvider: null,
  DnsServiceProvider: null,
  DnsServiceProviderIdentifier: null,
  RelatedLookups: [
    {
      Name: 'dns lookup',
      URL: 'https://mxtoolbox.com/api/v1/lookup/a/valuelabs.com',
      Command: 'a',
      CommandArgument: 'valuelabs.com'
    }
  ]
}
```