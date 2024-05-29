// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract AR {
    string public consultantName;
    address public consultant;
    uint256 public ARPoints;
    string public rewards;

    struct ARClient {
        string clientName;
        address client;
        uint256 points;
    }

    // mapping to store points to each account
    mapping(address => ARClient) public mappingPoints;

    constructor(string memory _consultantName, uint256 _ARPoints) {
        consultant = msg.sender;
        consultantName = _consultantName;
        ARPoints = _ARPoints;
    }

    function sendPoints (uint256 _points, address _client) public payable returns(uint256 amount){
        require(msg.sender == consultant, 'you are not a consultant.');
        require(_points >= 1, "Point amount must be greater than 1.");
        require(ARPoints >= _points, "Please top up the ARPoints into your account");

        ARPoints -= _points;
        mappingPoints[_client].points += _points;
        return _points;
    }
    function addARPoints (uint _ARPoints) public payable {
        require(msg.sender == consultant, 'you are not a consultant.');
        ARPoints += _ARPoints;
    }
    function addClientName (address _client, string memory _clientName) public payable {
        require(msg.sender == consultant, 'you are not a consultant.');
        mappingPoints[_client].clientName = _clientName;
        mappingPoints[_client].client = _client;
    }
}