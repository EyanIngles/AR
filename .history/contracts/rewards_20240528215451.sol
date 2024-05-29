// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract AR {
    string public consultantName;
    address public consultant;
    address public client;
    uint256 public ARPoints;
    string public rewards;
    string public clientName;

    // things will need ----


    // balance(points)
    // rewards to be redeemed[]
    constructor(string memory _consultantName, uint256 memory _ARPoints) {
        consultant = msg.sender;
        consultantName = _consultantName;
        ARPoints = _ARPoints;
    }

    function sendPoints (uint256 _points, address _client) public payable {
        require(msg.sender == consultant, 'you are not a consultant.');
        require(_points >= 1, "Point amount must be greater than 1.");
        ARPoints = _points;
        client = _client;
        _points[msg.sender] -= amount;
        _points[_client] += amount;

    }
}