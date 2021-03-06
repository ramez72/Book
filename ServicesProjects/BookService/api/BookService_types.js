//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
var Book = module.exports.Book = function(args) {
  this.id = null;
  this.author = null;
  this.title = null;
  this.price = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.author !== undefined && args.author !== null) {
      this.author = args.author;
    }
    if (args.title !== undefined && args.title !== null) {
      this.title = args.title;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field title is unset!');
    }
    if (args.price !== undefined && args.price !== null) {
      this.price = args.price;
    }
  }
};
Book.prototype = {};
Book.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.author = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.DOUBLE) {
        this.price = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Book.prototype.write = function(output) {
  output.writeStructBegin('Book');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.author !== null && this.author !== undefined) {
    output.writeFieldBegin('author', Thrift.Type.STRING, 2);
    output.writeString(this.author);
    output.writeFieldEnd();
  }
  if (this.title !== null && this.title !== undefined) {
    output.writeFieldBegin('title', Thrift.Type.STRING, 3);
    output.writeString(this.title);
    output.writeFieldEnd();
  }
  if (this.price !== null && this.price !== undefined) {
    output.writeFieldBegin('price', Thrift.Type.DOUBLE, 4);
    output.writeDouble(this.price);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ServiceException = module.exports.ServiceException = function(args) {
  Thrift.TException.call(this, "ServiceException");
  this.name = "ServiceException";
  this.errcode = null;
  this.error = null;
  this.trace = null;
  if (args) {
    if (args.errcode !== undefined && args.errcode !== null) {
      this.errcode = args.errcode;
    }
    if (args.error !== undefined && args.error !== null) {
      this.error = args.error;
    }
    if (args.trace !== undefined && args.trace !== null) {
      this.trace = args.trace;
    }
  }
};
Thrift.inherits(ServiceException, Thrift.TException);
ServiceException.prototype.name = 'ServiceException';
ServiceException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.errcode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.error = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.trace = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ServiceException.prototype.write = function(output) {
  output.writeStructBegin('ServiceException');
  if (this.errcode !== null && this.errcode !== undefined) {
    output.writeFieldBegin('errcode', Thrift.Type.STRING, 1);
    output.writeString(this.errcode);
    output.writeFieldEnd();
  }
  if (this.error !== null && this.error !== undefined) {
    output.writeFieldBegin('error', Thrift.Type.STRING, 2);
    output.writeString(this.error);
    output.writeFieldEnd();
  }
  if (this.trace !== null && this.trace !== undefined) {
    output.writeFieldBegin('trace', Thrift.Type.STRING, 3);
    output.writeString(this.trace);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

