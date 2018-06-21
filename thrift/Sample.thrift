namespace java com.epoc.test

service Sample{
    string getId();
    string withParameter(1:required string a);
}