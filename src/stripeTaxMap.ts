export default [
  {
    country: "AE",
    type: "ae_trn",
    description: "United Arab Emirates TRN",
    regex: /^[0-9]{15}$/,
    example: "123456789012345",
  },
  {
    country: "AU",
    type: "au_abn",
    description: "Australian Business Number (AU ABN)",
    regex: /^[0-9]{11}$/,
    example: "12345678912",
  },
  {
    country: "AU",
    type: "au_arn",
    description: "Australian Taxation Office Reference Number",
    regex: /^[0-9]{12}$/,
    example: "123456789123",
  },
  {
    country: "BR",
    type: "br_cnpj",
    description: "Brazilian CNPJ number",
    regex: /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2}$/,
    example: "01.234.456/5432-10",
  },
  {
    country: "BR",
    type: "br_cpf",
    description: "Brazilian CPF number",
    regex: /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/,
    example: "123.456.789-87",
  },
  {
    country: "CA",
    type: "ca_bn",
    description: "Canadian BN",
    regex: /^[0-9]{9}$/,
    example: "123456789",
  },
  {
    country: "CA",
    type: "ca_gst_hst",
    description: "Canadian GST/HST number",
    regex: /^[0-9]{9}RT[0-9]{4}$/,
    example: "123456789RT0002",
  },
  {
    country: "CA",
    type: "ca_pst_bc",
    description: "Canadian PST number (British Columbia)",
    regex: /^PST-[0-9]{4}-[0-9]{4}$/,
    example: "PST-1234-5678",
  },
  {
    country: "CA",
    type: "ca_pst_mb",
    description: "Canadian PST number (Manitoba)",
    regex: /^[0-9]{6}-[0-9]{1}$/,
    example: "123456-7",
  },
  {
    country: "CA",
    type: "ca_pst_sk",
    description: "Canadian PST number (Saskatchewan)",
    regex: /^[0-9]{7}$/,
    example: "1234567",
  },
  {
    country: "CA",
    type: "ca_qst",
    description: "Canadian QST number (Québec)",
    regex: /^[0-9]{10}TQ[0-9]{4}$/,
    example: "1234567890TQ1234",
  },

  {
    country: "CL",
    type: "cl_tin",
    description: "Chilean TIN",
    regex: /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-K$/,
    example: "12.345.678-K",
  },

  {
    country: "HR",
    type: "eu_vat",
    description: "Croatia - European VAT number",
    regex: /^HR[0-9]{11}$/,
    example: "HR12345678912",
  },
  {
    country: "CY",
    type: "eu_vat",
    description: "Cyprus - European VAT number",
    regex: /^CY[0-9]{8}Z$/,
    example: "CY12345678Z",
  },
  {
    country: "CZ",
    type: "eu_vat",
    description: "Czech Republic - European VAT number",
    regex: /^CZ[0-9]{10}$/,
    example: "CZ1234567890",
  },
  {
    country: "DK",
    type: "eu_vat",
    description: "Denmark - European VAT number",
    regex: /^DK[0-9]{8}$/,
    example: "DK12345678",
  },
  {
    country: "EE",
    type: "eu_vat",
    description: "Estonia - European VAT number",
    regex: /^EE[0-9]{9}$/,
    example: "EE123456789",
  },
  {
    country: "FI",
    type: "eu_vat",
    description: "Finland - European VAT number",
    regex: /^FI[0-9]{8}$/,
    example: "FI12345678",
  },
  {
    country: "FR",
    type: "eu_vat",
    description: "France - European VAT number",
    regex: /^FRAB[0-9]{9}$/,
    example: "FRAB123456789",
  },
  {
    country: "DE",
    type: "eu_vat",
    description: "Germany - European VAT number",
    regex: /^DE[0-9]{9}$/,
    example: "DE123456789",
  },
  {
    country: "DE",
    type: "eu_vat",
    description: "Germany - European VAT number",
    regex: /^DE[0-9]{9}$/,
    example: "DE123456789",
  },
  {
    country: "GR",
    type: "eu_vat",
    description: "Greece - European VAT number",
    regex: /^EL[0-9]{9}$/,
    example: "EL123456789",
  },
  {
    country: "HK",
    type: "hk_br",
    description: "Hong Kong BR number",
    regex: /^[0-9]{8}$/,
    example: "12345678",
  },
  {
    country: "HU",
    type: "eu_vat",
    description: "Hungary - European VAT number",
    regex: /^HU[0-9]{11}$/,
    example: "HU12345678912",
  },
  {
    country: "IN",
    type: "in_gst",
    description: "Indian GST number",
    regex: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{4}$/,
    example: "12ABCDE3456FGZH",
  },
  {
    country: "ID",
    type: "id_npwp",
    description: "Indonesian NPWP number",
    regex: /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\.[0-9]{1}\-[0-9]{3}\.[0-9]{3}$/,
    example: "12.345.678.9-012.345",
  },
  {
    country: "IE",
    type: "eu_vat",
    description: "Ireland - European VAT number",
    regex: /^IE[0-9]{7}[A-Z]{2}$/,
    example: "IE1234567AB",
  },
  {
    country: "IL",
    type: "il_vat",
    description: "Israel VAT",
    regex: /^[0-9]{9}$/,
    example: "000012345",
  },

  {
    country: "IT",
    type: "eu_vat",
    description: "Italy - European VAT number",
    regex: /^IT[0-9]{11}$/,
    example: "IT12345678912",
  },

  {
    country: "JP",
    type: "jp_cn",
    description: "Japanese Corporate Number (*Hōjin Bangō*)",
    regex: /^[0-9]{13}$/,
    example: "1234567891234",
  },

  {
    country: "JP",
    type: "jp_rn",
    description: "Japanese Registered Foreign Businesses' Registration Number (*Tōroku Kokugai Jigyōsha no Tōroku Bangō*)",
    regex: /^[0-9]{5}$/,
    example: "12345",
  },

  {
    country: "KR",
    type: "kr_brn",
    description: "Korean BRN",
    regex: /^[0-9]{3}-[0-9]{2}-[0-9]{5}$/,
    example: "123-45-67890",
  },
  {
    country: "LV",
    type: "eu_vat",
    description: "Latvia - European VAT number",
    regex: /^LV[0-9]{11}$/,
    example: "LV12345678912",
  },
  {
    country: "LI",
    type: "li_uid",
    description: "Liechtensteinian UID number",
    regex: /^CHE[0-9]{9}$/,
    example: "CHE123456789",
  },
  {
    country: "LT",
    type: "eu_vat",
    description: "Lithuania - European VAT number",
    regex: /^LT[0-9]{12}$/,
    example: "LT123456789123",
  },
  {
    country: "LU",
    type: "eu_vat",
    description: "Luxembourg - European VAT number",
    regex: /^LU[0-9]{8}$/,
    example: "LU12345678",
  },

  {
    country: "MY",
    type: "my_frp",
    description: "Malaysian FRP number",
    regex: /^[0-9]{8}$/,
    example: "12345678",
  },
  {
    country: "MY",
    type: "my_itn",
    description: "Malaysian ITN",
    regex: /^C(\s)?[0-9]{10}$/,
    example: "C 1234567890",
  },
  {
    country: "MY",
    type: "my_sst",
    description: "Malaysian SST number",
    regex: /^A[0-9]{2}-[0-9]{4}-[0-9]{8}$/,
    example: "A12-3456-78912345",
  },

  {
    country: "MT",
    type: "eu_vat",
    description: "Malta - European VAT number",
    regex: /^MT[0-9]{8}$/,
    example: "MT12345678",
  },

  {
    country: "MX",
    type: "mx_rfc",
    description: "Mexican RFC number",
    regex: /^[A-Z]{3}[0-9]{6}[A-Z]{2}[0-9]{1}$/,
    example: "ABC010203AB9",
  },

  {
    country: "NL",
    type: "eu_vat",
    description: "Netherlands - European VAT number",
    regex: /^NL[0-9]{9}B[0-9]{2}$/,
    example: "NL123456789B12",
  },
  {
    country: "NZ",
    type: "nz_gst",
    description: "New Zealand GST number",
    regex: /^[0-9]{9}$/,
    example: "123456789",
  },
  {
    country: "NO",
    type: "no_vat",
    description: "Norwegian VAT number",
    regex: /^[0-9]{9}MVA$/,
    example: "123456789MVA",
  },

  {
    country: "PL",
    type: "eu_vat",
    description: "Poland - European VAT number",
    regex: /^PL[0-9]{10}$/,
    example: "PL1234567890",
  },
  {
    country: "PT",
    type: "eu_vat",
    description: "Portugal - European VAT number",
    regex: /^PT[0-9]{9}$/,
    example: "PT123456789",
  },

  {
    country: "RO",
    type: "eu_vat",
    description: "Romania - European VAT number",
    regex: /^RO[0-9]{10}$/,
    example: "RO1234567891",
  },

  {
    country: "RU",
    type: "ru_inn",
    description: "Russian INN",
    regex: /^[0-9]{10}$/,
    example: "1234567891",
  },

  {
    country: "RU",
    type: "ru_kpp",
    description: "Russian KPP",
    regex: /^[0-9]{9}$/,
    example: "123456789",
  },

  {
    country: "SA",
    type: "sa_vat",
    description: "Saudi Arabia VAT",
    regex: /^[0-9]{15}$/,
    example: "123456789012345",
  },

  {
    country: "SG",
    type: "sg_gst",
    description: "Singaporean GST",
    regex: /^M[0-9]{8}X$/,
    example: "M12345678X",
  },
  {
    country: "SG",
    type: "sg_uen",
    description: "Singaporean UEN",
    regex: /^[0-9]{9}F$/,
    example: "123456789F",
  },

  {
    country: "SK",
    type: "eu_vat",
    description: "Slovakia - European VAT number",
    regex: /^SK[0-9]{10}$/,
    example: "SK1234567891",
  },
  {
    country: "SI",
    type: "eu_vat",
    description: "Slovenia - European VAT number",
    regex: /^SI[0-9]{8}$/,
    example: "SI12345678",
  },

  {
    country: "ZA",
    type: "za_vat",
    description: "South African VAT number",
    regex: /^4[0-9]{9}$/,
    example: "4123456789",
  },

  {
    country: "ES",
    type: "es_cif",
    description: "Spanish CIF number",
    regex: /^A[0-9]{8}$/,
    example: "A12345678",
  },

  {
    country: "ES",
    type: "eu_vat",
    description: "Spain - European VAT number",
    regex: /^ESA[0-9]{7}Z$/,
    example: "ESA1234567Z",
  },

  {
    country: "SE",
    type: "eu_vat",
    description: "Sweden - European VAT number",
    regex: /^SE[0-9]{12}$/,
    example: "SE123456789123",
  },

  {
    country: "CH",
    type: "ch_vat",
    description: "Switzerland - European VAT number",
    regex: /^CHE-[0-9]{3}\.[0-9]{3}\.[0-9]{3}(\s)?MWST$/,
    example: "CHE-123.456.789 MWST",
  },

  {
    country: "TW",
    type: "tw_vat",
    description: "Taiwanese VAT",
    regex: /^[0-9]{8}$/,
    example: "12345678",
  },

  {
    country: "TH",
    type: "th_vat",
    description: "Thai VAT",
    regex: /^[0-9]{13}$/,
    example: "1234567891234",
  },

  {
    country: "TH",
    type: "ae_trn",
    description: "United Arab Emirates TRN",
    regex: /^[0-9]{13}$/,
    example: "1234567891234",
  },

  {
    country: "GB",
    type: "gb_vat",
    description: "United Kingdom VAT number",
    regex: /^GB[0-9]{9}$/,
    example: "GB123456789",
  },

  {
    country: "GB",
    type: "eu_vat",
    description: "Northern Ireland VAT number",
    regex: /^XI[0-9]{9}$/,
    example: "XI123456789",
  },
  {
    country: "US",
    type: "us_ein",
    description: "United States EIN",
    regex: /^[0-9]{2}-[0-9]{7}$/,
    example: "12-3456789",
  },
] as const;
