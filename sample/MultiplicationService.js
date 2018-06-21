//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./hi_types');
//HELPER FUNCTIONS AND STRUCTURES

var MultiplicationService_multiply_args = function(args) {
  this.n1 = null;
  this.n2 = null;
  if (args) {
    if (args.n1 !== undefined && args.n1 !== null) {
      this.n1 = args.n1;
    }
    if (args.n2 !== undefined && args.n2 !== null) {
      this.n2 = args.n2;
    }
  }
};
MultiplicationService_multiply_args.prototype = {};
MultiplicationService_multiply_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.n1 = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.n2 = input.readI32();
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

MultiplicationService_multiply_args.prototype.write = function(output) {
  output.writeStructBegin('MultiplicationService_multiply_args');
  if (this.n1 !== null && this.n1 !== undefined) {
    output.writeFieldBegin('n1', Thrift.Type.I32, 1);
    output.writeI32(this.n1);
    output.writeFieldEnd();
  }
  if (this.n2 !== null && this.n2 !== undefined) {
    output.writeFieldBegin('n2', Thrift.Type.I32, 2);
    output.writeI32(this.n2);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MultiplicationService_multiply_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
MultiplicationService_multiply_result.prototype = {};
MultiplicationService_multiply_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MultiplicationService_multiply_result.prototype.write = function(output) {
  output.writeStructBegin('MultiplicationService_multiply_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MultiplicationServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
MultiplicationServiceClient.prototype = {};
MultiplicationServiceClient.prototype.seqid = function() { return this._seqid; };
MultiplicationServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
MultiplicationServiceClient.prototype.multiply = function(n1, n2, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_multiply(n1, n2);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_multiply(n1, n2);
  }
};

MultiplicationServiceClient.prototype.send_multiply = function(n1, n2) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('multiply', Thrift.MessageType.CALL, this.seqid());
  var params = {
    n1: n1,
    n2: n2
  };
  var args = new MultiplicationService_multiply_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MultiplicationServiceClient.prototype.recv_multiply = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new MultiplicationService_multiply_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('multiply failed: unknown result');
};
var MultiplicationServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
MultiplicationServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}
;
MultiplicationServiceProcessor.prototype.process_multiply = function(seqid, input, output) {
  var args = new MultiplicationService_multiply_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.multiply.length === 2) {
    Q.fcall(this._handler.multiply.bind(this._handler), args.n1, args.n2)
      .then(function(result) {
        var result_obj = new MultiplicationService_multiply_result({success: result});
        output.writeMessageBegin("multiply", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("multiply", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.multiply(args.n1, args.n2, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new MultiplicationService_multiply_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("multiply", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("multiply", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
