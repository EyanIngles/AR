// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract AR {
    string public consultantName;
    address public consultant;
    address payable public client;
    uint256 public ARPoints;
    string public rewards;
    string public clientName;

    // things will need ----
    mapping(address => uint256) public mappingPoints;

    constructor(string memory _consultantName, uint256 _ARPoints) {
        consultant = msg.sender;
        consultantName = _consultantName;
        ARPoints = _ARPoints;
    }

    function sendPoints (uint256 _points, address _client) public payable {
        require(msg.sender == consultant, 'you are not a consultant.');
        require(_points >= 1, "Point amount must be greater than 1.");
        ARPoints = _points;
        client = _client;
        mappingPoints[msg.sender] -= ARPoints;
        mappingPoints[_client] += ARPoints;

    }
}